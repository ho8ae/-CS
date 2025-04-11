import React from 'react'

function App() {
  return (
    <>
      <header className="bg-gray-900 text-white p-4 sticky top-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">CS Morning</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:text-blue-400">기능</a></li>
              <li><a href="#pricing" className="hover:text-blue-400">가격</a></li>
              <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* 히어로 섹션 */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6">매일 아침 CS 면접 질문</h2>
            <p className="text-xl mb-8">매일 아침 8시에 카카오톡으로 CS 면접 질문을 받아보세요.</p>
            <div className="flex justify-center">
              <a 
                href="https://pf.kakao.com/_xxxxx/chat" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg text-lg shadow-lg"
              >
                카카오톡 채널 추가하기
              </a>
            </div>
          </div>
        </section>

        {/* 기능 섹션 */}
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">매일 CS 질문</h3>
                <p>매일 아침 8시에 정확하게 CS 면접 질문을 카카오톡으로 받아보세요.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">즉시 답변 확인</h3>
                <p>답변을 제출하면 즉시 정답과 상세한 설명을 확인할 수 있습니다.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">학습 추적</h3>
                <p>본인의 정답률과 학습 진행 상황을 추적하세요.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 가격 섹션 */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">가격</h2>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-center mb-4">무료</h3>
                <p className="text-center text-gray-600 mb-6">현재 베타 서비스로 무료로 제공됩니다.</p>
                <ul className="mb-8">
                  <li className="flex items-center mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    매일 CS 면접 질문
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    즉시 답변 확인
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    모든 기능 이용 가능
                  </li>
                </ul>
                <div className="text-center">
                  <a href="https://pf.kakao.com/_xxxxx/chat" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                    무료로 시작하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section id="faq" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">질문은 어떻게 선택되나요?</h3>
                <p className="text-gray-600">CS 면접에서 자주 나오는 질문들을 데이터베이스화하여 알고리즘, 자료구조, 네트워크, 운영체제 등 다양한 주제에서 균형있게 선택됩니다.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">언제 질문이 발송되나요?</h3>
                <p className="text-gray-600">매일 아침 8시에 정확하게 발송됩니다. 시간은 한국 표준시(KST)를 기준으로 합니다.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">질문의 난이도는 어떻게 되나요?</h3>
                <p className="text-gray-600">다양한 난이도의 질문이 제공됩니다. 기초적인 개념부터 심화 주제까지 모두 다룹니다.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">개발자에게 커피 한 잔을 보낼 수 있나요?</h3>
                <p className="text-gray-600">네! 서비스가 유용하다고 생각되시면, 카카오톡 채널에서 '개발자에게 커피 보내기' 기능을 통해 후원해주실 수 있습니다.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-4">CS Morning</h2>
            <p className="text-gray-400">매일 아침 CS 면접 질문을 카카오톡으로 받아보세요.</p>
          </div>
          <div className="border-t border-gray-800 pt-4 mt-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-400">© 2025 CS Morning. All rights reserved.</p>
              </div>
              <div className="flex space-x-4">
                <a href="/terms" className="text-sm text-gray-400 hover:text-white">이용약관</a>
                <a href="/privacy" className="text-sm text-gray-400 hover:text-white">개인정보처리방침</a>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>사업자등록번호: 123-45-67890</p>
              <p>대표: 홍길동</p>
              <p>주소: 서울특별시 강남구 테헤란로 123</p>
              <p>이메일: contact@csmorning.co.kr</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App