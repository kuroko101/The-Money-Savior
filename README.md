# The-Money-Savior
A a free personalized chatbot for financial advice. 

Why Finacial Literacy?
Financial literacy is a growing concern among young adults, and it’s no surprise that many students struggle with managing their finances. With the rising cost of education, students need to be financially literate in order to make informed decisions about their finances. Unfortunately, many schools do not offer financial education courses, leaving students to navigate the complex world of finance on their own.

This lack of financial education is a serious issue that can have long-lasting effects on students’ lives. Many students graduate with high levels of debt, struggle to make ends meet, and are unable to save for the future. These financial challenges can be overwhelming and lead to stress, anxiety, and even depression.

How can we tackle this Problem?
As a solution, I decided to replicate a project and build a personalized chatbot for financial advice. The chatbot provides students with instant financial advice and guidance, helping them make informed decisions about their money. The chatbot uses artificial intelligence to answer students’ questions and provide them with personalized recommendations based on their financial situation.

With the chatbot, students can learn about budgeting, saving, investing, and other financial topics in a way that is easy to understand and tailored to their individual needs. The chatbot can also help students set financial goals and track their progress, empowering them to take control of their finances and achieve financial stability.

The Technical Dept
Now, let’s dive into the technical aspects of how this chatbot works. The chatbot is built using a natural language processing (NLP) library called Spacy, which allows it to understand and parse natural language messages.

When a message is received, the process_message the function is called. This function first tokenizes the message using Spacy, breaking it down into individual words and phrases. It then identifies any named entities in the message, such as company names or stock symbols, and extracts them to be used later.

Next, the function classifies the intent of the message, based on keywords present in the text. For example, if the message contains the word “buy”, the intent is classified as “buy_stock”, and if it contains the word “sell”, the intent is classified as “sell_stock”. This is done using a series of if-else statements.

Once the intent and entities have been identified, they are returned in a JSON object, which can be used by the backend to generate a response to the user.

The Infrastructure
The frontend code provides the user interface for the chatbot, allowing users to interact with the system via text input and receive responses from the chatbot. This frontend interface is implemented using the coding languages HTML, CSS, and JavaScript.

The backend server is responsible for processing the user’s input and generating an appropriate response using the AI language model. In this case, the AI language model is a GPT (Generative Pre-trained Transformer) model, which is designed to generate natural language responses based on an input text.

But the real magic of this chatbot comes from its integration with the OpenAI GPT API. When the backend receives a message from the user, it sends it to the GPT API for processing. The GPT API then generates a response based on the user’s message and any relevant context, such as previous messages in the conversation.

This response is then sent back to the front end, where it is displayed to the user as a message from the chatbot. The result is a chatbot that is able to provide helpful and informative responses to users, based on their individual needs and circumstances.

The Impact
This can be a powerful tool for promoting financial literacy among students. Providing them with personalized guidance and information can help them make more informed decisions about their finances and build a solid foundation for their financial future.

Financial literacy is an important issue that affects many students today. By providing personalized financial advice and guidance, we can help students make informed decisions about their finances and achieve financial stability. The personalized chatbot for financial advice is a powerful tool that can help students navigate the complex world of finance and take control of their financial future.

Thank you for Reading!
