// Repository: 데이터베이스와 통신합니다. 이 레이어는 직접 모델과 상호작용합니다.

import Notice from "../../../models/notice.model.js";

// 모든 게시글 조회
export const findAll = async () => {
  try {
    return await Notice.findAll(); // 모든 게시글 데이터 가져오기
  } catch (error) {
    throw new Error("모든 게시판을 가져오는 중 오류 발생함");
  }
  
};

// ID로 특정 게시글 조회
export const findById = async (id) => {
  try {
    return await Notice.findByPk(id); // 기본 키로 데이터 가져오기
  } catch (error) {
    throw new Error(`게시글을 가져오는 중 오류 발생. ID: ${id}`);
  }
};

// 새 게시글 생성
export const create = async (noticeData) => {
  try {
    return await Notice.create(noticeData); // 전달된 데이터로 새로운 게시글 생성
  } catch (error) {
    throw new Error("게시글 생성 중 오류 발생");
  }
};

// 기존 게시글 수정
export const update = async (id, noticeData) => {
  const notice = await Notice.findByPk(id);  // 쓴 게시글 있는지 조회
  if (!notice) {
    throw new Error(`ID: ${id}에 해당하는 게시글을 찾을 수 없습니다.`)
  }
  try{
  //게시글 있으면 게시글 수정
  return await Notice.update(noticeData);
  } catch (error) {
    throw new Error(`게시글 수정 중 오류가 발생했습니다. ID: ${id}`);
  }
};

// ID로 게시판 삭제
export const deleteNotice = async (id) => {
  try {
    const notice = await Notice.findByPk(id);  // 게시글 있는지 확인
  if (!notice) {
    throw new Error(`ID: ${id}에 해당하는 게시글을 찾을 수 없음`);
  }
  // 게시글 존재할 경우 삭제
    await notice.destroy(); 
    return true;
  } catch (error) {
    throw new Error(`게시글 삭제 중 오류 발생. ID: ${id}`);
  }
};
