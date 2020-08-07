const axios = require('axios');

const getQuestionCategory = () => 
  axios.get('https://leetcode-cn.com/api/problems/all/').then((res) => {
      const map = {};
      res.data.stat_status_pairs.forEach(({ stat }) => {
          map[stat.frontend_question_id] = {
              url: stat.question__title_slug
          };
      });
      return map;
  });

const getDetailByURL = (title) => {
  const body = {
    "operationName": "questionData",
    "variables": { "titleSlug": title },
    "query": "query questionData($titleSlug: String!) {  question(titleSlug: $titleSlug) {    questionId    questionFrontendId    boundTopicId    title    titleSlug    content    translatedTitle    translatedContent    isPaidOnly    difficulty    likes    dislikes    isLiked    similarQuestions    contributors {      username      profileUrl      avatarUrl      __typename    }    langToValidPlayground    topicTags {      name      slug      translatedName      __typename    }    companyTagStats    codeSnippets {      lang      langSlug      code      __typename    }    stats    hints    solution {      id      canSeeDetail      __typename    }    status    sampleTestCase    metaData    judgerAvailable    judgeType    mysqlSchemas    enableRunCode    envInfo    book {      id      bookName      pressName      source      shortDescription      fullDescription      bookImgUrl      pressImgUrl      productUrl      __typename    }    isSubscribed    isDailyQuestion    dailyRecordStatus    editorType    ugcQuestionId    style    __typename  }}"
  }
  return axios.post('https://leetcode-cn.com/graphql/', body,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36',
      }
    }
  ).then((res) => {
    const { translatedTitle, translatedContent } = res.data.data.question;
    return {
      title: translatedTitle,
      content: translatedContent
    }
  }).catch((err) => {
    console.log(JSON.stringify(err));
  });
}

module.exports = {
  getQuestionCategory,
  getDetailByURL
}
 