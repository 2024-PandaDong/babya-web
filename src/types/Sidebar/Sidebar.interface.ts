export interface MemberDataProps {
    nickname: string,
    dDay: number,
    age: number,
    marriedYears: number,
    children: Child[],
    profileImg: string
}

interface Child {
    childId: number,
    name: string,
    birthName: string,
    type: string
}