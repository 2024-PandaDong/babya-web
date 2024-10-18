class MenuPageTransform {
    public PageTransform(pathName: string): string {
        if (pathName.includes("/banner")) {
            return "배너 관리"
        } else if (pathName.includes("/quiz")) {
            return "퀴즈 관리"
        } else if (pathName.includes("/company")) {
            return "회사 관리"
        } else if (pathName.includes("/post")) {
            return "게시물 관리"
        } else if (pathName.includes("/FAQ")) {
            return "FAQ 관리"
        } else if (pathName.includes("/inquiry")) {
            return "문의 관리"
        } else if (pathName.includes("/")) {
            return "회원 관리"
        }
    }
}

export default new MenuPageTransform();