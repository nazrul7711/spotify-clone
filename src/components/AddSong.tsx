import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "@/styles/addSong.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch } from "@/app/store/hook";
import { closeModal } from "@/app/store/spotifySlice";
import { S3Client,PutObjectCommand} from "@aws-sdk/client-s3";

type FormType = {
  title: string;
  author: string;
  song: string;
  image: string;
};

const AddSong = () => {
  const S3 = new S3Client({
    region: process.env.BUCKET_REGION!,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });
  // AWS_ACCESS_KEY = "AKIA3BVRDWEHJ6CO5F72";
  // AWS_SECRET_ACCESS_KEY = "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";
  // BUCKET_NAME = "nextjs-project-nazrul";
  // BUCKET_REGION = "ap-south-1";

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  function closeHandler() {
    dispatch(closeModal());
  }
  const submitHandler: SubmitHandler<FormType> = (data) => {
    console.log(data.song[0]);
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.close} onClick={closeHandler}>
          <AiOutlineClose />
        </div>
        <div className={styles.addsong}>Add a Song</div>
        <div className={styles.upload}>Upload an mp3 file</div>
        <input type="text" placeholder="Song title" {...register("title")} />
        <input type="text" placeholder="Song author" {...register("author")} />
        <div className={styles.songselect}>
          <label htmlFor="songFile">Select a song file</label>
          <input type="file" {...register("song")} />
        </div>
        <div className={styles.songselect}>
          <label htmlFor="songImage">Select an image</label>
          <input type="file" {...register("image")} />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default AddSong;
