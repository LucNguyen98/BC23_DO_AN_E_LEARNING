import {
  cate_be,
  cate_data,
  cate_design,
  cate_fe,
  cate_fullstack,
  cate_mobile,
} from 'src/assets/images/course';

export const getCategoryImage = (name) => {
  switch (name) {
    case 'BackEnd':
      return cate_be;

    case 'Design':
      return cate_design;

    case 'DiDong':
      return cate_mobile;

    case 'FrontEnd':
      return cate_fe;

    case 'FullStack':
      return cate_fullstack;

    case 'TuDuy':
      return cate_data;

    default:
      return cate_data;
  }
};
