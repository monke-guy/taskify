<a name="readme-top"></a>

# taskify - Collaborate, manage projects and reach new productivity peaks.

![image](https://github.com/user-attachments/assets/f4b3a16d-d302-4965-9200-4a2dcfc9b539)


<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
  
</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
trello-clone/
  |- actions/
    |-- copy-card/
    |-- copy-list/
    |-- create-board/
    |-- create-card/
    |-- create-list/
    |-- delete-board/
    |-- delete-card/
    |-- delete-list/
    |-- stripe-redirect/
    |-- update-board/
    |-- update-card/
    |-- update-card-order/
    |-- update-list/
    |-- update-list-order/
  |- app/
    |-- (marketing)/
    |-- (platform)/
        |--- (clerk)/
            |---- select-org/[[...select-org]]/
            |---- sign-in/[[...sign-in]]/
            |---- sign-up/[[...sign-up]]/
        |--- (dashboard)/
            |---- board/
            |---- organization/
    |-- api/
        |--- cards/[cardId]/
        |--- webhook/
  |- components/
        |--- form/
        |--- modals/
            |---- card-modal/
        |--- providers/
        |--- ui/
  |- config/
  |- constants/
  |- hooks/
  |- lib/
  |- prisma/
    |-- schema.prisma
  |- public/
    |-- fonts/
    |-- icons/
  |- .env
  |- .env.example
  |- .eslintrc.json
  |- .gitignore
  |- components.json
  |- middleware.ts
  |- next.config.js
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
  |- types.ts
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in root directory.
4. Contents of `.env`:

```bash
# .env


# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# clerk redirect url(s)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# mysql db url
DATABASE_URL=<your-db-url>

# unsplash api key
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# stripe api & webhook key
STRIPE_API_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# app base url
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. **Clerk Keys**:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are provided by Clerk. You need to sign up for an account on Clerk (https://www.clerk.dev/), log in, and access these keys in your account settings.

![Copy Clerk Secret and Publishable Key](/.github/images/step_clerk.png "Copy Clerk Secret and Publishable Key")

6. **Stripe Secret Key**:
   - `STRIPE_API_KEY` is provided by Stripe in order to setup online payments. You need to sign up for an account on Stripe (https://stripe.com/), log in, and access these keys in your account dashboard.

![Copy Stripe Secret Key](/.github/images/step_stripe.png "Copy Stripe Secret Key")

7. **Stripe Webhook Secret**:

   - `STRIPE_WEBHOOK_SECRET` is required for handling Stripe webhooks securely. Follow these steps to obtain the webhook secret:
     - Sign in to your Stripe account (https://dashboard.stripe.com/).
     - In the Dashboard, go to "Developers" > "Webhooks".
     - Click the "Add endpoint" button.
     - Set up the endpoint details and select `checkout.session.completed` and `invoice.payment_succeeded` event.
     - After saving, you'll see the webhook signing secret. Copy this value to use as `STRIPE_WEBHOOK_SECRET`.

8. **URLs for Clerk**:

   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL`, `NEXT_PUBLIC_CLERK_SIGN_UP_URL`, `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`, and `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` are endpoints or URLs related to your Clerk setup. You can configure these in your Clerk dashboard.

9. **Prisma Database URL**:

   - `DATABASE_URL` is the connection URL for your Supabase PostgreSQL database. You will need to create a Supabase account (https://supabase.com/) or use an existing one. Obtain the connection URL from your Supabase dashboard after creating a new project.

10. **Public App URL**:

    - `NEXT_PUBLIC_APP_URL` are endpoints or URLs related to this Project. You can configure/copy this from your needs.

11. **Unsplash API Key**:

    - Sign up on [Unsplash](https://unsplash.com/) if you haven't already.
    - Join the Unsplash Developer Community [here](https://unsplash.com/developers).
    - Create a new application in the [Developer Dashboard](https://unsplash.com/oauth/applications).
    - Obtain your `Access Key` from the created application.
    - Set the `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY` environment variable in your project with the obtained key.

12. Open terminal in root directory. Run npm install or yarn install.

13. Now app is fully configured 👍 and you can start using this app using npm run dev or yarn dev.

### :books: Additional Resources

- Clerk Documentation: https://www.clerk.dev/docs/
- Stripe Documentation: https://stripe.com/docs/
- Unsplash Documentation: https://unsplash.com/documentation/
- Aiven Documentation: https://docs.aiven.io/
- Prisma Documentation: https://www.prisma.io/docs/

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

![image](https://github.com/user-attachments/assets/856cee4c-0f1d-457e-a773-ad90630c6bae)
![image](https://github.com/user-attachments/assets/1aa1cdba-22b0-49f0-8867-11788eb7bdf0)
![image](https://github.com/user-attachments/assets/837479ce-91c4-41b8-bda8-b23edbd27734)
![image](https://github.com/user-attachments/assets/10afbe33-9e49-46b6-912a-cd63b01af719)
![image](https://github.com/user-attachments/assets/bfb283ca-dd7a-49c8-bb0f-f1b87a64e278)


## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Prisma](https://skillicons.dev/icons?i=prisma "Prisma")](https://prisma.io/ "Prisma")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and libraries that are used in My Portfolio

- [Clerk](https://clerk.com/ "Clerk")
- [ShadCN UI](https://shadcn.com/ "ShadCN UI")
- [CLSX](https://www.npmjs.com/package/clsx "CLSX")
- [Usehooks TS](https://usehooks-ts.com/ "Usehooks TS")
- [Unsplash JS](https://github.com/unsplash/unsplash-js#readme "Unsplash JS")
- [Date FNS](https://date-fns.org/ "Date FNS")
- [Stripe](https://stripe.com/ "Stripe")
- [Recharts](https://recharts.org/ "Recharts")
- [ZOD](https://zod.dev/ "ZOD")
- [Sonner](https://sonner.emilkowal.ski/ "Sonner")
- [Lucide Icons](https://lucide.dev/ "Lucide Icons")
- [Prettier](https://prettier.io/ "Prettier")
- [ESLint](https://eslint.org/ "ESLint")
- [Next PWA](https://github.com/shadowwalker/next-pwa#readme "Next PWA")



<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
