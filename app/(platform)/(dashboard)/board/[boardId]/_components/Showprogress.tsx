import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ProgressChart } from "./ProgressChart"
import { ListWithCards } from "@/types"

interface ShowprogressProps{
  data:ListWithCards[];
}



const ShowProgress=({data}:ShowprogressProps)=>{


    return (
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Progress</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Your Progress</DialogTitle>
          <DialogDescription>
            This Chart will show No. of Cards present in this Board.
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <ProgressChart data={data}  />
          
        </div>
      </DialogContent>
    </Dialog>
    )

    

}

export default ShowProgress;