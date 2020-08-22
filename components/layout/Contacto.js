import React from "react";
import { css } from "@emotion/core";
import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

export default function Contacto() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        a {
          font-size: 1.8rem;
          margin-left: 2rem;
          color: #ffff;
          font-family: "PT Sans", sans serif;
          font-weight: bold;

          &:last-of-types {
            margin-right: 0;
          }
        }
      `}
    >
      <Link href="https://www.facebook.com/MisionesLaptops-422328697857958">
        <a>
          <FacebookIcon style={{ fontSize: 80 }}>Facebook</FacebookIcon>
        </a>
      </Link>
      <Link href="https://www.instagram.com/portatilesmnes/">
        <a>
          <InstagramIcon style={{ fontSize: 80 }}>Instagram</InstagramIcon>
        </a>
      </Link>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
          flex-direction: column;
          margin-top: 5.2rem;
        `}
      >
        <WhatsAppIcon style={{ fontSize: 80, color: "white" }}>
          WhatsApp
        </WhatsAppIcon>
        <p
          css={css`
            font-size: 1.8rem;

            color: #ffff;
            font-family: "PT Sans", sans serif;
            font-weight: bold;
          `}
        >
          3764-618003
        </p>
      </div>
    </div>
  );
}
