export type SectionId = 
  | 'title-page'
  | 'cover-page'
  | 'acknowledgment'
  | 'dedication'
  | 'personal-philosophy'
  | 'cv'
  | 'achievements'
  | 'seminars'
  | 'department-background'
  | 'subject-teachers'
  | 'subject-inclusions'
  | 'appendices';

export interface ContentBlock {
  id: string;
  type: 'text' | 'image' | 'video';
  content: string;
  alignment: 'left' | 'center' | 'right';
}

export interface PillarCard {
  title: string;
  description: string;
}

export interface CoverPageSectionData {
  label: string;
  showLabel?: boolean;
  heading: string;
  showHeading?: boolean;
  paragraph1: string;
  showParagraph1?: boolean;
  paragraph2: string;
  pillars: [PillarCard, PillarCard, PillarCard, PillarCard];
  blocks: ContentBlock[];
  layoutOrder: string[];
  alignment?: 'left' | 'center' | 'right';
}

export interface BasicSectionData {
  content: string;
  blocks: ContentBlock[];
  layoutOrder: string[];
  alignment?: 'left' | 'center' | 'right';
}

export interface CoverPageData {
  heroMedia: {
    type: 'image' | 'spline' | 'url';
    url: string;
  };
  heroName: string;
  aboutMeTitle: string;
  aboutMeContent: string;
  projects: {
    id: string;
    title: string;
    media: {
      type: 'image' | 'spline' | 'url';
      url: string;
    };
  }[];
}

export interface TitlePageData {
  headerImage: string;
  showHeaderImage: boolean;
  headerImageWidth: number;
  title: string;
  showTitle: boolean;
  subtitle: string;
  showSubtitle: boolean;
  description: string;
  showDescription: boolean;
  studentName: string;
  showStudentName: boolean;
  courseYearSection: string;
  showCourseYearSection: boolean;
  professorName: string;
  showProfessorName: boolean;
  academicYear: string;
  showAcademicYear: boolean;
  submittedByLabel: string;
  showSubmittedByLabel: boolean;
  submittedToLabel: string;
  showSubmittedToLabel: boolean;
  academicYearLabel: string;
  blocks: ContentBlock[];
  layoutOrder: string[]; // Track order of all pieces: title, subtitle, desc, student, professor, ay, and all custom block IDs
  alignment?: 'left' | 'center' | 'right';
}

export interface Section {
  id: SectionId;
  label: string;
}

export interface AppSettings {
  bgColor: string;
  bgImage: string;
  bgType: 'color' | 'image';
  fontFamily: string;
  textColor: string;
  bgOpacity: number;
}

export const SECTIONS: Section[] = [
  { id: 'title-page', label: 'Title Page' },
  { id: 'cover-page', label: 'Cover Page' },
  { id: 'acknowledgment', label: 'Acknowledgment' },
  { id: 'dedication', label: 'Dedication' },
];
