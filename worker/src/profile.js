// Everything the chat bot is allowed to say about Jaya. It answers from this text only,
// so anything missing here gets "I don't know, email Jaya". Edit freely and redeploy.
export const PROFILE = `
NAME: Jaya Hareeswar Reddy Gudisa
HEADLINE: Software Engineering | Infrastructure | LLM Applications
CURRENT ROLE: Junior Software Developer, TaskWin India Private Limited
LOCATION: Guntur, India
EMAIL: jayahareeswar2004@gmail.com
PHONE: +91 6303673727
LINKEDIN: https://www.linkedin.com/in/jayahareeswarreddy
GITHUB: https://github.com/jayahareeswarreddy
PORTFOLIO: https://jayahareeswarreddy.github.io/
STATUS: Open to new opportunities, especially LLM, RAG and agent work.

SUMMARY
Computer Science graduate and AI engineer with experience in backend development, application
integration and workflow automation. Works mainly in Python and FastAPI, building LLM apps,
RAG pipelines and tool-calling agents.

EXPERIENCE
1. Junior Software Developer, TaskWin India Private Limited (full-time), Oct 2026 to present.
2. Freelance AI Engineer, Taskwin GmbH, Apr 2026 to Oct 2026.
Work across both roles:
- Develops backend services in Python and FastAPI with API validation, retries and exception handling.
- Builds RAG pipelines using document chunking, embeddings and vector search for internal document retrieval.
- Implements tool-calling workflows and integrates REST APIs with backend services.
- Debugs application failures and monitors latency, token usage and workflow execution.
- Coordinates frontend and backend development and troubleshoots integration issues.

RESEARCH
Brain Tumor Detection, Jan to May 2025. Built a hybrid CNN-VGG16 model that classifies brain MRI
images across 8 classes, reaching 99% accuracy on the evaluated dataset. Prepared datasets with
Pandas, trained in TensorFlow, evaluated with accuracy, precision, recall, F1-score and a
per-class confusion matrix. Stack: Python, TensorFlow, Pandas, Scikit-learn.

PROJECTS
- Prompt-to-UI Generator: deterministic planner, validator and generator builds React interfaces
  from an audited component library. Includes explanations, live previews and version rollback;
  same prompt produces repeatable output without LLM calls or API keys. Stack: React 19,
  TypeScript, Vite, Tailwind CSS, Node.js and Express.
  Live demo: https://prompt2-ui-tau.vercel.app
  Code: https://github.com/jayahareeswarreddy/Prompt2UI
- RAG Eval: an evaluation-first retrieval system that measures whether search found the right
  evidence before judging the generated answer. The benchmark covers 875 Python standard-library
  modules and 930 docstring-derived questions; 27 configurations are scored on a 150-question
  development split using Recall@k, MRR, nDCG, and latency percentiles. It compares fixed,
  recursive, Markdown-aware, and Python AST chunking with BM25, dense, and reciprocal-rank-fusion
  hybrid retrieval. AST chunking with BM25 reached 0.960 top-1 on this corpus. The questions are
  derived from docstrings and share vocabulary with the source, so that result should not be
  generalized to all user documents. The FastAPI app supports document search, uploads, grounded
  question answering, and evaluation; citations are checked against retrieved passages, and an
  extractive answer path works without an API key. Stack: Python, FastAPI, NumPy. Live:
  https://rag-eval-7psf.onrender.com
  Code: https://github.com/jayahareeswarreddy/rag-eval
- FutureTrackAI: career guidance platform with 14 FastAPI endpoints, structured JSON responses,
  that score skills against 24 career paths and provide learning roadmaps. Configurable Groq and
  OpenAI generation uses schema validation, corrective retries and deterministic fallbacks; 43
  API tests run without MongoDB or an API key. Stack: Python, FastAPI, React, MongoDB, Groq/OpenAI.
  Live: https://jayahareeswarreddy.github.io/FutureTrack-AI/
  Code: https://github.com/jayahareeswarreddy/FutureTrack-AI

SKILLS
- Programming: Python, SQL, JavaScript, Java, C++
- Generative AI: LLMs, prompt engineering, RAG, embeddings, vector search, AI agents, tool calling,
  structured outputs, LoRA, QLoRA
- ML/DL: TensorFlow, Keras, Scikit-learn, spaCy, NumPy, Pandas, CNN, VGG16, NLP, named entity recognition
- Backend and databases: FastAPI, REST APIs, React, MongoDB, MySQL, vector databases
- Data engineering: Apache Kafka, Change Data Capture (CDC), Apache Airflow DAGs
- Tools: Docker, Kubernetes, Git, GitHub, Postman, Selenium

EDUCATION
- B.Tech, Computer Science and Engineering, SRM University-AP, 2022 to 2026, CGPA 8.1/10.
  Coursework: Operating Systems, Computer Networks, Machine Learning, Deep Learning,
  Probability and Statistics, Linear Algebra.
- Intermediate (MPC), ARKA Junior College, 2020 to 2022, 91%.
- 10th class, KKR Gowtham, Guntur, 2020, 100%.

CERTIFICATIONS
- Claude Code in Action (Anthropic)
- MongoDB Associate Developer (MongoDB)
- Machine Learning with Python (freeCodeCamp)

NOT COVERED HERE (tell the visitor to ask Jaya directly by email):
salary expectations, notice period, relocation, visa status, exact availability dates,
and anything personal that is not listed above.
`;
