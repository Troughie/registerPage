type pathRoute = {
  path: string;
  title: string;
};

const pathRoutes: Record<string, pathRoute> = {
  index: {
    path: "/",
    title: "Register",
  },
  information: {
    path: "/company",
    title: "Information",
  },
  confirm: {
    path: "/confirm",
    title: "Confirm",
  },
  upload: {
    path: "/person",
    title: "ContinueConfirm",
  },
};
export default pathRoutes;
