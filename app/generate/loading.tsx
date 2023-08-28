import Plant from "@/components/Plant";

export default function Loading({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let searchId = searchParams.id;
  if (searchId !== undefined) {
    if (Array.isArray(searchId)) {
      searchId = searchId[0];
    }
  }
  return <Plant id={searchId || ""} message={"loading"} link={""} />;
}
