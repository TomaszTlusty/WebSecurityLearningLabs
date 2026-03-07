export default async function Module({
                                         params,
                                     }: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    return (
        <section>
            <h1 className="text-white">
                Here is a Path: {id}
            </h1>
        </section>
    )
}