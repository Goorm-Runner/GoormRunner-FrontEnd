// export interface Team {
//     id: number;
//     title: string;  // 제목
//     content: string;  // 내용
//     address: string;  // 경기장 주소 또는 이름
//     meetTime: string;  // 날짜 및 시간 (ISO 형식)
//     maxParticipants: number;  // 최대 참가자 수
//     teamName: string;  // 팀 이름
//     ballparkName: string;  // 경기장 이름
// }

// export interface MatchingContentProps {
//     teams: Team[];  // API로부터 받은 팀 배열 타입
//     limit?: number;  // 표시할 팀의 최대 개수
// }

// export interface Option {
//     value: string;
//     label: string;
//     color?: string;  // 선택 사항: 필터에서 사용되는 색상 (선택 사항)
// }

// export interface OptionsData {
//     teamOptions: Option[];  // 팀 필터 옵션
//     stadiumOptions: Option[];  // 경기장 필터 옵션
// }

// export interface RecruitmentDetail {
//     id: number;
//     title: string;
//     content: string;
//     address: string;
//     meetTime: string;
//     maxParticipants: number;
//     teamName: string;
//     ballparkName: string;
// };

import teams  from "../../assets/teams.json";
export interface Team {
    id: number;
    name: string;
    logo: string;
    date: string;
    time: string;
    location: string;
    color: string;
    title: string;
    maxParticipants: string;
}

export interface MatchingContentProps {
    teams: typeof teams;
    limit?: number;
}

export interface Option {
    value: string;
    label: string;
}

export interface OptionsData {
    teamOptions: Option[];
    stadiumOptions: Option[];
}