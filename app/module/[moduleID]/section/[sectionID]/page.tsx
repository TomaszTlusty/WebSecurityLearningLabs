export default async function Section({
                                         params,
                                     }: {
    params: Promise<{ sectionID: string }>
}) {
    const { sectionID } = await params

    return (
        <section>
            <h1 className="text-white">
                Here is a Module: {sectionID}
            </h1>
        </section>
    )
}