"use client";
import TopSidebar from "@/components/TopSidebar";
import styles from "@/styles/index.module.scss";
import BottomSidebar from "@/components/BottomSidebar";

import Mainbar from "@/components/Mainbar";
import ReactHookForm from "@/components/ReactHookForm";

export default function Home() {
  type Inputs = {
    name: string;
    surname: string;
  };
  return (
    <main className={styles.wrapper}>
      <TopSidebar className={styles.topsidebar} />
      <BottomSidebar className={styles.bottomsidebar} />
      <Mainbar className={styles.mainbar} />

    </main>
  );
}
/*
font figtree
title and description chnage
sidebar
usePathname
useRouter is imported from next/navigation 
to use useSession make a seperate provider component that wraps children with Session and then wrap this component inside layout component and wrap the children that is inside body

*/
/*
npm i react-hook-form
import {useForm} from "react-hook-form"
{register,handle,formState:{error}} = useForm({
  defaultValues:{
    firstName:"james",
    lastName:"luke"
  }
})
console.log(error)
{...register("firstname"),{required:"this is needed",minLength:{
  length:4,
  message:"atleast 4 is needed"
}}}
onSubmit={handleSublit((data)=>console.log(data))}
*/
/*
next crash course
PAGE ROUTER
empty html with on;ly div all rendering happening at frontend
routing means when url changes we load different content without sending extra request
u can add backend code write apis
how to create dynamic page [newsid].tsx
useRouter from next.router/router = useRouter()/router.query.newsId
Link from next/link
will this work [dynamic]=>index.tsx
add layout to _app
so suppose u have a page with ul and not list in next u will see the ul 
two forms of pre rendering static and server side
static is when page is generated during build
after build static dont change
getStaticProps => return {
  props:{
    firstname:string,lastname:string
  }
  revalidate:number of seconds
}
Note:u can pass context to getstaticprops but it does not have access to runtime data like cookie , headers or dynamic params.
props:{firstname:string,lastname:string}
ssg:means page generated statically with initialProps
static : means where no getStaticProps was used no InitialProps
isg: incremental static generated


getServerSideProps(){
  return {
    props:{

    }
  }
}
this page is not generated on build but on server whenever a request comes
the context object this method has access to is request ,response, dynamic params, cookies , headers

what to use dependes upon if u need access to request object or if your data changes very often

context.params.meetupId
getStaticPaths(){
  fallback:true or false or "blocking" ,
  return [
    {params:{newsid:"alpha"}},
    {params:{newsid:"beta"}}
  ]
}

to write backend apis create a folder in pages folder named api
 we can write mongodb crud calls in getStatic or serversideprops

 add Head tag to add metadata



 APP ROUTER
 * now app instead of pages
 * but if u want u still can make a pages folder and define like index.js and that will still work
 * dashboard folder / page.tsx mandatory
 * (dummy) for grouping
 * all components are server components and to make them client component "use client" to, add hook, event listeners 
 * backend codes use server components
 * if u wanna use client code in server component make client component and use context there and make it a wrapper to wrap around server component
 * u can make server components async and use axios out of the box no useEffect 
 * suppose u have a server code thats fetching data and it takes time u have for this a loading.tsx define and it will be rendered meanwhile your page.tsx is ready with the data because u cant use state to render different thing
 * u define error.tsx to handle error for server components and as these error.tsx has access to two properties error and reset u have to make this "use client" to use reset
 * if u have a dynamic component like [newsId]/page.tsx . each component is passed props which is a object and it has a params,searchParams. params will have the value of dynamic parameter
 * [newsId]/page.tsx props.params.newsId 
 * searchParams is query parameter from browser /page.tsx params.searchParams.someQuery
 * [...catchAll] params.catchAll=["one","two","three"]
 * if u build your app now the page that is [dynamic] are dynamic means they like server side pages generated for each request
 * but suppose if u have a dashboard page which is static (means no data fetching) we can turn this static page into dynamic one by using await fetch(someurl,{cache:"no store"}) no store means to not cache this page allways fetch fresh data 
 * await fetch(url,{next:{revalidate:10}}) means the page is static for 10 seconds that is data is cached and if another request comes a fresh fetch will be initiated
 * to use axios let data = await axios.get(someurl) export const dynamic = "force dynamic" now this page is dynamic too
 * export const revalidate = 30 will make it static but cahce data for only 30 seconds
 * if u have a [postId] page which next interprtes as dynamic but u r not fetching any data in this page then to turn them into a static one define a function export async function generateStaticParams(){ let posts=["one","two"] return posts.map(post=>({post})) }   
 * layout page for default is created by default u cant delete it



*/
