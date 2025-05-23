export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "Gaming", label: "Gaming" },
      { id: "Professional", label: "Professional" },
      { id: "Office", label: "Office" },
      { id: "MultiTasking", label: "MultiTasking" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "hp", label: "hp" },
      { id: "Dell", label: "Dell" },
      { id: "Acer", label: "Acer" },
      { id: "Lenovo", label: "Lenovo" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "Gaming",
    label: "Gaming",
    path: "/shop/listing",
  },
  {
    id: "Professional",
    label: "Professional",
    path: "/shop/listing",
  },
  {
    id: "Office",
    label: "Office",
    path: "/shop/listing",
  },
  {
    id: "MultiTasking",
    label: "MultiTasking",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  gaming: "Gaming",
  professional: "Professional",
  office: "Office",
  multitasking: "MultiTasking",
};

export const brandOptionsMap = {
  hp: "HP",
  dell: "Dell",
  acer: "Acer",
  lenovo: "Lenovo",
};

export const filterOptions = {
  category: [
    { id: "Gaming", label: "Gaming" },
    { id: "Professional", label: "Professional" },
    { id: "Office", label: "Office" },
    { id: "MultiTasking", label: "MultiTasking" },
  ],
  brand: [
    { id: "hp", label: "hp" },
    { id: "Dell", label: "Dell" },
    { id: "Acer", label: "Acer" },
    { id: "Lenovo", label: "Lenovo" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
