export interface RouterConfig {
  path: string;
  name?: string;
  meta: RouterMeta;
  children?: RouterConfig[];
  component: any;
  redirect?: string;
}

interface RouterMeta {
  title: string;
  isRedirect?: boolean;
}
