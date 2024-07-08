class DataTransform {
    public AreaTypeDataTransform(areaCode: string): string {
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
}

export default new DataTransform();