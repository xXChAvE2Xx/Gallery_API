import { Request, Response } from "express";
import Photo from "../models/Photo";
import path from "path";
import fs from "fs-extra";

export async function getPhoto(req: Request, res: Response): Promise<Response> {
  const id = req.params.id;
  try {
    const photo = await Photo.findByPk(id);
    return res.json(photo);
  } catch (error) {
    return res.json({
      message: "An error has ocurred: " + error,
    });
  }
}

export async function getPhotos(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const getPhotos = await Photo.findAll();
console.log(getPhotos)
    return res.json({
      getPhotos,
    });
  } catch (error) {
    return res.json({
      message: "An error has ocurred: " + error,
    });
  }
}

export async function createPhoto(
  req: Request,
  res: Response
): Promise<Response> {
  const { title, description } = req.body;

  const newPhoto = {
    title: title,
    description: description,
    imagePath: req.file?.path,
  };

  try {
    const photo = await Photo.create(newPhoto);
    console.log(photo);
    return res.json({
      message: "Photo successfully saved",
      photo,
    });
  } catch (error) {
    return res.json({
      message: "An error has ocurred: " + error,
    });
  }
}

export async function deletePhoto(
  req: Request,
  res: Response
): Promise<Response> {
  const id = req.params.id;
  let msg: string = "";
  try {
    const infoPhoto = await Photo.findByPk(id);
    if (infoPhoto) {
      const imgPath: any = infoPhoto?.get("imagePath");

      await fs.unlink(path.resolve(imgPath));
    }

    const photo = await Photo.destroy({
      where: {
        id: id,
      },
    });

    if (photo == 1) {
      msg = "Photo Deleted";
    } else if (photo == 0) {
      msg = "The image does not exist";
    }

    return res.json({
      message: photo ? "Photo Deleted" : "The image does not exist",
      photo,
    });
  } catch (error) {
    return res.json({
      message: "An error has ocurred: " + error,
    });
  }
}

export async function updatePhoto(
  req: Request,
  res: Response
): Promise<Response> {
  const id = req.params.id;
  const { title, description } = req.body;
  const msg = "";
  try {
    const updatedPhoto = await Photo.update(
      {
        title: title,
        description: description,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.json({
      message: updatedPhoto[0] ? "Successfully updated" : "The image does not exist",
      updatedPhoto,
    });
  } catch (error) {
    return res.json({
      message: "An error has ocurred: " + error,
    });
  }
}
