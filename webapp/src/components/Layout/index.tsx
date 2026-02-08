import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getAllIdeasRoute } from "../../lib/routes";
import style from "./index.module.scss";

export const Layout = () => {
    return (
        <div className={style.layout}>
            <div className={style.navigation}>
                <b className={style.logo}>IdeaNick</b>
                <ul className={style.menu}>
                    <li className={style.item}>
                        <Link className={style.link} to={getAllIdeasRoute()}>
                            All Ideas
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={style.content}>
                <Outlet />
            </div>
        </div>
    );
};
