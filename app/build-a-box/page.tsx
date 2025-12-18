import { BoxBuilderLayout } from "@/components/build-a-box/BoxBuilderLayout";

type BuildBoxPageProps = {
  searchParams?: {
    from?: string;
  };
};

export default function BuildBoxPage({ searchParams }: BuildBoxPageProps) {
  const from = searchParams?.from;

  return (
    <BoxBuilderLayout fromSlug={from} />
  );
}
