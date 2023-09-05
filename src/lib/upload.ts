import multer from "multer"
import { NextApiRequest, NextApiResponse } from "next"
import {createRouter,expressWrapper} from "next-connect"
import {S3} from "aws-sdk"

// const upload = multer()
// const handler = createRouter<NextApiRequest,NextApiResponse>()
// handler
//   .use(upload.single("file"))
// Asia Pacific (Mumbai) ap-south-1
//nextjs-project-nazrul

// const s3 = new S3({
//   access
// })

/*
search and home color depend on active
*/