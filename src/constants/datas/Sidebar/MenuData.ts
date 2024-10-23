import MemberIcon from "src/assets/img/Common/Sidebar/MemberIcon.svg";
import BannerIcon from "src/assets/img/Common/Sidebar/BannerIcon.svg";
import QuizIcon from "src/assets/img/Common/Sidebar/QuizIcon.svg";
import CompanyIcon from "src/assets/img/Common/Sidebar/CompanyIcon.svg";
import PostIcon from "src/assets/img/Common/Sidebar/PostIcon.svg";
import FAQIcon from "src/assets/img/Common/Sidebar/FAQIcon.svg";
import InquiryIcon from "src/assets/img/Common/Sidebar/InquiryIcon.svg";

export const MenuData = [
    {
        id: 0,
        name: "회원 관리",
        icon: MemberIcon,
        path: "/",
    },
    {
        id: 1,
        name: "배너 관리",
        icon: BannerIcon,
        path: "/banner",
    },
    {
        id: 2,
        name: "퀴즈 관리",
        icon: QuizIcon,
        path: "/quiz",
    },
    {
        id: 3,
        name: "회사 관리",
        icon: CompanyIcon,
        path: "/company",
    },
    // {
    //     id: 4,
    //     name: "게시물 관리",
    //     icon: PostIcon,
    //     path: "/post",
    // },
    {
        id: 4,
        name: "문의 관리",
        icon: InquiryIcon,
        path: "/inquiry",
    },
]