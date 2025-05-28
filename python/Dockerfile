FROM python:3.12-slim
WORKDIR /blaxel/python
RUN apt update && apt install -y build-essential

COPY python/pyproject.toml python/uv.lock /blaxel/python/
RUN pip install uv && uv sync --refresh

COPY python /blaxel/python

COPY shared /blaxel/shared

ENV PATH="/blaxel/python/.venv/bin:$PATH"

ENTRYPOINT [".venv/bin/python3", "-m", "src"]
