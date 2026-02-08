import React from "react";
import { trpc } from "../../lib/trpc";
import { Link } from "react-router-dom";
import { getViewIdeaRoute } from "../../lib/routes";
import style from "./index.module.scss";

export const AllIdeasPage = () => {
    const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery();

    if (isLoading || isFetching) {
        return <span>LOADING</span>;
    }

    if (isError) {
        return <span>{error.message}</span>;
    }

    return (
        <div>
            <h1 className={style.title}>All Ideas</h1>
            <div className={style.ideas}>
                {data.ideas.map((idea) => (
                    <div className={style.idea} key={idea.nick}>
                        <h2 className={style.ideaName}>
                            <Link className={style.ideaLink} to={getViewIdeaRoute({ ideaNick: idea.nick })}>
                                {idea.name}
                            </Link>
                        </h2>
                        <p className={style.ideaDescription}>{idea.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
