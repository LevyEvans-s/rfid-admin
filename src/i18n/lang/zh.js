export default {
  login: {
    title: '用户登录',
    loginBtn: '登录',
    usernameRule: '用户名为必填项',
    passwordRule: '密码不能少于5位',
    desc: `
    测试权限账号：<br />
    提供三种权限账号：<br />
    1. 超级管理员账号： super-admin <br />
    2. 管理员账号：admin <br />
    3. 测试可配置账号：test <br />
    密码统一为：123456 <br />
    <br />
    导入用户账号：<br />
    可使用导入的用户名登录 <br />
    密码统一为：123456  <br />
    <b>注意：导入用户区分中英文库！！！！</b>
    `
  },
  title: '混凝土试块数据平台',
  route: {
    profile: '个人中心',
    user: '用户',
    excelImport: 'Excel导入',
    userManage: '员工管理',
    userInfo: '员工信息',
    roleList: '角色列表',
    permissionList: '权限列表',
    storeManage: '仓储管理',
    storeList: '入库清单',
    storeInfo: '试块信息'
  },
  toast: {
    switchLangSuccess: '切换语言成功'
  },
  tagsView: {
    refresh: '刷新',
    closeRight: '关闭右侧',
    closeOther: '关闭其他'
  },
  theme: {
    themeColorChange: '主题色更换',
    themeChange: '主题更换'
  },
  universal: {
    title: '提示',
    confirm: '确定',
    cancel: '取消'
  },
  navBar: {
    themeChange: '主题修改',
    headerSearch: '页面搜索',
    screenfull: '全屏替换',
    lang: '国际化',
    guide: '功能引导',
    home: '首页',
    course: '课程主页',
    logout: '退出登录'
  },
  guide: {
    close: '关闭',
    next: '下一个',
    prev: '上一个',
    guideTitle: '引导',
    guideDesc: '打开引导功能',
    hamburgerTitle: '汉堡按钮',
    hamburgerDesc: '打开和关闭左侧菜单',
    breadcrumbTitle: '面包屑',
    breadcrumbDesc: '指示当前页面位置',
    searchTitle: '搜索',
    searchDesc: '页面链接搜索',
    fullTitle: '全屏',
    fullDesc: '页面显示切换',
    themeTitle: '主题',
    themeDesc: '更换项目主题',
    langTitle: '国际化',
    langDesc: '语言切换',
    tagTitle: '标签',
    tagDesc: '已打开页面标签',
    sidebarTitle: '菜单',
    sidebarDesc: '项目功能菜单'
  },
  profile: {
    muted: ' 混凝土试块智能检测平台',
    projectIntroduction: '平台介绍',
    detailUserInfo: '个人详情',
    name: '姓名',
    age: '年龄',
    id: 'ID',
    mobile: '手机号',
    site: '所属单位',
    todos: '待办事项',
    storeData: '仓库数据',
    notification: '通知',
    info: '个人信息'
  },
  userInfo: {
    print: '打印',
    title: '员工信息',
    name: '姓名',
    sex: '性别',
    nation: '民族',
    mobile: '手机号',
    province: '居住地',
    serial: '员工编号',
    date: '入职时间',
    remark: '备注',
    address: '联系地址',
    site: '所属单位',
    foot: '签字：___________日期:___________'
  },
  uploadExcel: {
    upload: '点击上传',
    drop: '将文件拖到此处'
  },
  excel: {
    importExcel: 'excel 导入',
    exportExcel: 'excel 导出',
    exportZip: 'zip 导出',
    name: '姓名',
    mobile: '联系方式',
    avatar: '头像',
    role: '角色',
    openTime: '开通时间',
    action: '操作',
    show: '查看',
    showRole: '角色',
    defaultRole: '员工',
    remove: '删除',
    removeSuccess: '删除成功',
    title: '导出为 excel',
    placeholder: 'excel 文件名称',
    defaultName: '员工管理表',
    defaultName2: '试块信息清单',
    close: '取 消',
    confirm: '导 出',
    importSuccess: ' 条员工数据导入成功',
    dialogTitle1: '确定要删除用户 ',
    dialogTitle2: ' 吗？',
    dialogTitle3: ' 确定删除试块 ',
    roleDialogTitle: '配置角色',
    blockId: '样品编号',
    tester: '试验人',
    testerId: '试验人工号',
    testDate: '应检日期',
    testPlace: '试验地点',
    company: '委托单位',
    edit: '编辑',
    check: '查看'
  },
  role: {
    buttonTxt: '新增角色',
    index: '序号',
    name: '名称',
    desc: '描述',
    action: '操作',
    assignPermissions: '分配权限',
    removeRole: '删除角色',
    dialogTitle: '新增角色',
    dialogRole: '角色名称',
    dialogDesc: '角色描述',
    updateRoleSuccess: '用户角色更新成功'
  },
  permission: {
    name: '权限名称',
    mark: '权限标识',
    desc: '权限描述'
  },
  form: {
    title: '编辑信息',
    blockId: '试块编号',
    tester: '采样人',
    testerId: '采样人工号',
    testDate: '采样日期',
    testPlace: '采样地点',
    compressive: '抗压指数',
    penetration: '抗渗透值',
    rate: '合格率',
    updateFormSuccess: '更新数据成功',
    company: '所属单位'
  },
  storeInfo: {
    title: '试块信息',
    print: '打印',
    submit: '提交修改',
    compressive: '抗压指数',
    penetration: '抗渗透值',
    rate: '合格率',
    company: '委托单位',
    isRecycle: '是否回收',
    status: '样品状态',
    category: '项目品种',
    strengthGrade: '强度等级',
    makeTime: '制作日期',
    requestDays: '要求龄期',
    testDate: '应检日期',
    condition: '养护条件',
    specification: '规格型号',
    part: '代表部位',
    blockId: '样品编号',
    tester: '试验人',
    testerId: '试验人工号',
    testPlace: '试验地点',
    remark: '备注',
    notion_param1: '说明',
    notion_param2: '委托单位和样品的有关信息由委托方填写并对其真实性负责；样品状态由检测（试验）单位业务受理人填写；其他信息由双方商定。样品资料（如说明书、见证资料、抽样单等）委托方须在委托时即时提供'
  }
}
