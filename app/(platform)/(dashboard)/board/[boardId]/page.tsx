import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { ListContainer } from "./_components/list-container";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import ShowProgress from "./_components/Showprogress";

type BoardIdPageProps = {
  params: {
    boardId: string;
  };
};

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const { orgId } = auth();

  if (!orgId) redirect("/select-org");

  const lists = await db.list.findMany({
    where: {
      boardId: params.boardId,
      board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });

 

  return (
    <div className="p-4 h-full overflow-x-auto relative  overflow-y-hidden">
  <ListContainer boardId={params.boardId} data={lists} />
  <div className="sticky left-4 bottom-4">
    <ShowProgress data={lists}/>
  </div>
</div>

  );
};

export default BoardIdPage;
