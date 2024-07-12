import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {MemberDataProps} from "src/types/Sidebar/Sidebar.interface";
import {babyaAxios} from "src/libs/axios/CustomAxios";

const useSidebar = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState<MemberDataProps>();
    
    const handleMenuClick = (path: string) => {
        navigate(path);
    }

    useEffect(() => {
        const MemberProfileRead = async () => {
            try {
                await babyaAxios.get("member/profile/my").then((res) => {
                    setProfileData(res.data.data);
                })
            } catch (error) {
                console.log(error);
            }
        }

        MemberProfileRead();
    }, []);

    return { pathname, profileData, handleMenuClick }
}

export default useSidebar;