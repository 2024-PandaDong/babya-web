class DataTransform {
    public AreaNameTransform(areaCode: string): string {
        switch (areaCode) {
            case "00":
                return "전국";
            case "11":
                return "서울특별시";
            case "21":
                return "부산광역시";
            case "22":
                return "대구광역시";
            case "23":
                return "인천광역시";
            case "24":
                return "광주광역시";
            case "25":
                return "대전광역시";
            case "26":
                return "울산광역시";
            case "29":
                return "세종특별자치시";
            case "31":
                return "경기도";
            case "32":
                return "강원특별자치도";
            case "33":
                return "충청북도";
            case "34":
                return "충청남도";
            case "35":
                return "전북특별자치도";
            case "36":
                return "전라남도";
            case "37":
                return "경상북도";
            case "38":
                return "경상남도";
            case "39":
                return "제주특별자치도";
        }
    }

    public AreaCodeTransform(areaCode: string): string | null {
        switch (areaCode) {
            case "전국":
                return "00";
            case "서울특별시":
                return "11";
            case "부산광역시":
                return "21";
            case "대구광역시":
                return "22";
            case "인천광역시":
                return "23";
            case "광주광역시":
                return "24";
            case "대전광역시":
                return "25";
            case "울산광역시":
                return "26";
            case "세종특별자치시":
                return "29";
            case "경기도":
                return "31";
            case "강원특별자치도":
                return "32";
            case "충청북도":
                return "33";
            case "충청남도":
                return "34";
            case "전북특별자치도":
                return "35";
            case "전라남도":
                return "36";
            case "경상북도":
                return "37";
            case "경상남도":
                return "38";
            case "제주특별자치도":
                return "39";
            default:
                return null;
        }
    }
}

export default new DataTransform();