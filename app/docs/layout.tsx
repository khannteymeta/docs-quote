import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import Image from 'next/image';

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      themeSwitch={{ enabled: false }}
      nav={{
        title: (
          <div className="flex items-center py-1">
            <Image src="/logo.png" alt="Dq Logo" width={64} height={64} className="h-12 md:h-14 w-auto object-contain" />
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
