from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from agents import Agent, Runner, set_default_openai_key

load_dotenv()

app = FastAPI()

# Add CORS middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this to your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.getenv("OPENAI_API_KEY")
if API_KEY:
    set_default_openai_key(API_KEY)
    print("OpenAI API Key loaded from .env file.")
else:
    print("Warning: OPENAI_API_KEY not found in .env file.")


class QueryRequest(BaseModel):
    query: str

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI agent backend!"}

@app.post("/agent")
async def run_agent(request: QueryRequest):
    print(f"Received query: {request.query}")
    try:
        # Create a simple agent
        agent = Agent(
            name="Assistant",
            instructions="You are a helpful assistant.",
            model="gpt-3.5-turbo" # Specify the model to use
        )

        # Run the agent with the user's query
        print(f"Running agent with query: {request.query}")
        result = await Runner.run(agent, request.query)
        print(f"Agent finished. Result: {result}")


        async def event_generator():
            # openai-agents provides a final_output, so we'll stream that as one chunk
            if result and result.final_output:
                print(f"Streaming final output: {result.final_output}")
                yield result.final_output
            else:
                print("Agent did not produce a final output.")
                yield "Agent did not produce a final output."
        
        from fastapi.responses import StreamingResponse
        return StreamingResponse(event_generator(), media_type="text/plain")

    except Exception as e:
        print(f"Error running agent: {e}")
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)