import React from "react";
import { trpc } from "../../lib/trpc";
import { Link } from "react-router-dom";
import { getViewIdeaRoute } from "../../lib/routes";
import style from "./index.module.scss";
import { Segment } from "../../components/Segment";

export const AllIdeasPage = () => {
    const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery();

    if (isLoading || isFetching) {
        return <span>LOADING</span>;
    }

    if (isError) {
        return <span>{error.message}</span>;
    }

    return (
        <Segment title="All Ideas">
            <div className={style.ideas}>
                {data.ideas.map((idea) => (
                    <div className={style.idea} key={idea.nick}>
                        <Segment
                            title={
                                <Link className={style.ideaLink} to={getViewIdeaRoute({ ideaNick: idea.nick })}>
                                    {idea.name}
                                </Link>
                            }
                            size={2}
                            description={idea.description}
                        />
                    </div>
                ))}
            </div>
        </Segment>
    );
};
