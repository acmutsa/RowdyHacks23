import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { isAuthorized } from '..';
import ErrorList from '../../../components/ErrorList';
import PendingQuestion from '../../../components/PendingQuestion';
import { RequestHelper } from '../../../lib/request-helper';
import { useAuthContext } from '../../../lib/user/AuthContext';
import { QADocument } from '../../api/questions';

/**
 * Resolve question page.
 *
 * This page allows admins and organizers to resolve a specific question asked by contestant
 *
 * Route: /admin/resolve?questionId=...
 */
export default function ResolveQuestionPage() {
  const router = useRouter();
  const questionId = router.query.questionId as string;
  const [question, setQuestion] = useState<QADocument | null>(null);
  const [answer, setAnswer] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const { user } = useAuthContext();

  useEffect(() => {
    if (!questionId) return;
    RequestHelper.get<QADocument>(`/api/questions/pending/${questionId}`, {})
      .then(({ data }) => setQuestion(data))
      .catch((error) => console.log(error));
  }, [questionId]);

  const addError = (errMsg: string) => {
    setErrors((prev) => [...prev, errMsg]);
  };

  const submitAnswer = async () => {
    try {
      await RequestHelper.post<QADocument, void>(
        `/api/questions/pending/${questionId}`,
        {
          headers: {
            Authorization: user.token,
          },
        },
        {
          ...question,
          answer,
        },
      );
      setAnswer('');
      router.push('/admin');
    } catch (error) {
      addError('Failed to submit answer. Please try again later');
      console.log(error);
    }
  };

  if (!user || !isAuthorized(user))
    return <div className="text-2xl font-black text-center">Unauthorized</div>;

  if (!question) return <div className="text-2xl font-black text-center">Loading...</div>;

  return (
    <div className="p-6">
      <ErrorList
        errors={errors}
        onClose={(idx: number) => {
          const newErrorList = [...errors];
          newErrorList.splice(idx, 1);
          setErrors(newErrorList);
        }}
      />
      <PendingQuestion question={question.question} />
      <textarea
        className="w-full rounded-xl p-4"
        rows={5}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        style={{ backgroundColor: '#F2F3FF' }}
        placeholder="Type your answer here"
      ></textarea>
      <div className="flex flex-row justify-end my-4">
        <button
          type="button"
          className="p-2 rounded-lg"
          style={{ backgroundColor: '#9CA6FF', color: 'black' }}
          onClick={() => {
            submitAnswer();
          }}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
}
