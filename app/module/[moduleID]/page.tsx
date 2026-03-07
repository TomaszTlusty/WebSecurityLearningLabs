export default async function Module({
                                         params,
                                     }: {
    params: Promise<{ moduleID: string }>
}) {
    const { moduleID } = await params

    return (
        <section>
            <h1 className="text-white">
                Here is a Module: {moduleID}
            </h1>
        </section>
    )
}