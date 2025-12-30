import React from "react";
import { trpc } from "../../lib/trpc";
import { Link } from "react-router-dom";
import { getViewIdeaRoute } from "../../lib/routes";

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
            <h1>All Ideas</h1>
            {data.ideas.map((idea, key) => {
                return (
                    <div key={key}>
                        <h2>
                            <Link to={getViewIdeaRoute({ ideaNick: idea.nick })}>{idea.name}</Link>
                        </h2>
                        <p>{idea.description}</p>
                    </div>
                );
            })}
        </div>
    );
};
