import { source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const { slug } = await props.params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsBody>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams().map(params => ({
    slug: params.slug,
  }));
}

export async function generateMetadata(props: PageProps<"/docs/[[...slug]]">) {
  const { slug } = await props.params;
  const page = source.getPage(slug);
  if (!page) notFound();
  return { title: page.data.title, description: page.data.description };
}
