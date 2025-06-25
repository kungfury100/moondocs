// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  type?: "static" | "collapsible";
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Quickstart",
    href: "/quickstart",
    noLink: true,
    type: "static",
    items: [
      { title: "Designer", href: "/designer" },
      { title: "Developer", href: "/developer" },
    ],
  },
  {
    title: "Documentation",
    href: "/documentation",
    noLink: true,
    type: "static",
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Design language",
        href: "/design-language",
        noLink: true,
        items: [
          { title: "Color", href: "/color" },
          { title: "Typography", href: "/typography" },
          { title: "Elevation", href: "/elevation" },
        ],
      },
    ],
  },
  {
    title: "Components",
    href: "/components",
    noLink: true,
    type: "static",
    items: [
      {
        title: "Actions",
        href: "/actions",
        noLink: true,
        items: [
          { title: "Button", href: "/button" },
          { title: "Icon button", href: "/icon-button" },
        ],
      },
      {
        title: "Forms & selection controls",
        href: "/forms-and-selection-controls",
        noLink: true,
        items: [
          { title: "Input", href: "/input" },
          { title: "Select", href: "/select" },
          { title: "Textarea", href: "/textarea" },
          { title: "Checkbox", href: "/checkbox" },
          { title: "Radio", href: "/radio" },
          { title: "Switch", href: "/switch" },
          { title: "Chip", href: "/chip" },
          { title: "Authenticator", href: "/authenticator" },
          { title: "Segmented control", href: "/segmented-control" },
        ],
      },
      {
        title: "Content display",
        href: "/content-display",
        noLink: true,
        items: [
          { title: "Accordion", href: "/accordion" },
          { title: "Avatar", href: "/avatar" },
          { title: "Carousel", href: "/carousel" },
          { title: "List", href: "/list" },
          { title: "Table", href: "/table" },
        ],
      },
      {
        title: "Indicators & status",
        href: "/indicators-and-status",
        noLink: true,
        items: [
          { title: "Badge", href: "/badge" },
          { title: "Loader", href: "/loader" },
          { title: "Linear progress", href: "/linear-progress" },
          { title: "Circular progress", href: "/circular-progress" },
          { title: "Placeholder", href: "/placeholder" },
          { title: "Tag", href: "/tag" },
        ],
      },
      {
        title: "Containers & layout",
        href: "/containers-and-layout",
        noLink: true,
        items: [
          { title: "Bottom sheet", href: "/bottom-sheet" },
          { title: "Drawer", href: "/drawer" },
          { title: "Dialog", href: "/dialog" },
          { title: "Dropdown", href: "/dropdown" },
        ],
      },
      {
        title: "Messaging & feedback",
        href: "/messaging-and-feedback",
        noLink: true,
        items: [
          { title: "Alert", href: "/alert" },
          { title: "Snackbar", href: "/snackbar" },
          { title: "Tooltip", href: "/tooltip" },
        ],
      },
      {
        title: "Navigation",
        href: "/navigation",
        noLink: true,
        items: [
          { title: "Menu", href: "/menu" },
          { title: "Breadcrumb", href: "/breadcrumb" },
          { title: "Pagination", href: "/pagination" },
          { title: "Tab list", href: "/tab-list" },
        ],
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
