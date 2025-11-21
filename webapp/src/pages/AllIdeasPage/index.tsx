import { trpc } from "../../lib/trpc";

export const AllIdeasPage = () => {
    const { data, error, isLoading, isFetching, isError} = trpc.getIdeas.useQuery();
    if (isLoading || isFetching) return <span>LOADING</span>;
    if (isError) return <span>{error.message}</span>;
    return (
        <div>
            <h1>All Ideas</h1>
            {data.ideas.map((el, key) => {
                return (
                    <div key={key}>
                        <h2>{el.name}</h2>
                        <p>{el.description}</p>
                    </div>
                );
            })}
        </div>
    );
};