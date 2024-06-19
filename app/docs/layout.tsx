import { RootProvider } from 'fumadocs-ui/provider';
import 'fumadocs-ui/style.css';
import { pageTree } from '../source';
import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from './layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <DocsLayout tree={pageTree} {...baseOptions}>
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
