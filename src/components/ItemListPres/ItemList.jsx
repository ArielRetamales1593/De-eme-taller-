import React from "react";
import Styles from "./item.module.css";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Image,
  Heading,
  Stack,
} from "@chakra-ui/react";

// el key va a la primera etiqueta despues del return
const ItemList = ({ items }) => {
  return (
    <div className={Styles.container}>
      {items.map((e) => {
        return (
          <div key={e.id} className={Styles.container}>
            <Card
              className={Styles.tarjeta}
              direction={{ sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                className={Styles.img}
                objectFit="cover"
                src={e.img}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody className={Styles.body}>
                  <Heading className={Styles.titulo} size="md">
                    {e.title}
                  </Heading>

                  <Text py="2">
                    <p>
                      <i>{e.description} </i>
                    </p>
                  </Text>
                </CardBody>

                <CardFooter className={Styles.boton1}>
                  <Link to={`/itemDetail/${e.id}`}>
                    {" "}
                    <button className={Styles.boton}>Ver Producto</button>
                  </Link>
                </CardFooter>
              </Stack>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
