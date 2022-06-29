// 删除空的children数据
const DeleteChild = (menu) => {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].children && menu[i].children.length <= 0) {
      delete menu[i].children
    } else if (menu[i].children && menu[i].children.length > 0) {
      DeleteChild(menu[i].children)
    }
  }
  return menu
}
// 过滤出去除空children的数据
export const filterMenuData = (menu) => {
  const menuList = DeleteChild(menu)
  return menuList
}
