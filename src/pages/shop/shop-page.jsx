import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";

import { Header } from "../../components/header";
import { Stars } from "../../components/stars";
import { products } from "./products";

import styles from "./shop-page.module.css";

export const ShopPage = () => (
  <div>
    <Header />
    <ul className={styles.list}>
      {products.map((phone) => (
        <li className={styles.item}>
          <div className={styles.wrapper}>
            <img src={phone.img} alt="phone" />
            <div className={styles.box}>
              <Button variant="outlined">Быстрый просмотр</Button>
            </div>
            {phone.discount && (
              <span className={styles.discount}>{phone.discount}</span>
            )}
          </div>
          <div className={styles.wrap}>
            <div>
              <span className={styles.price}>{phone.price}</span>
              <span className={styles.money}>{phone.money}</span>
            </div>
            <p className={styles.card}>{phone.card}</p>
            <span className={styles.description}>{phone.description}</span>
            <Stars phone={phone} />
            {phone.credit && <p>{phone.credit}</p>}
            <div>
              <Button variant="contained" color="secondary">
                В корзину
              </Button>
              <IconButton color="secondary" aria-label="add an alarm">
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
