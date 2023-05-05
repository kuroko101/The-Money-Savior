import spacy

# Load the English language model
nlp = spacy.load("en_core_web_sm")

def process_message(message):
    # Tokenize the message
    doc = nlp(message)

    # Extract named entities
    entities = []
    for ent in doc.ents:
        entities.append({
            "entity": ent.text,
            "label": ent.label_
        })

    # Classify the intent
    intent = "unknown"
    if "buy" in message:
        intent = "buy_stock"
    elif "sell" in message:
        intent = "sell_stock"
    elif "price" in message:
        intent = "get_price"
    # ... add more intent classifications as needed ...

    return {
        "intent": intent,
        "entities": entities
    }
