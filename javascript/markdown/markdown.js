// Helper function to wrap text with a given HTML tag
function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

// Function to replace markdown delimiters with corresponding HTML tags
function replaceDelimiter(text, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}([^${delimiter}]+)${delimiter}`);
  return text.replace(pattern, `<${tag}>$1</${tag}>`);
}

// Functions to parse strong and emphasis markdown syntax
function parseStrong(text) {
  return replaceDelimiter(text, '__', 'strong');
}

function parseEmphasis(text) {
  return replaceDelimiter(text, '_', 'em');
}

// Function to handle inline markdown (strong and emphasis)
function parseInline(markdown) {
  return parseEmphasis(parseStrong(markdown));
}

// Function to determine and parse header lines
function parseHeader(line) {
  const headerMatch = line.match(/^(#{1,6})\s+(.*)$/);
  if (headerMatch) {
    const [, hashes, content] = headerMatch;
    const level = hashes.length;
    return wrap(content, `h${level}`);
  }
  return null;
}

// Function to parse list items
function parseListItem(line) {
  const listItemMatch = line.match(/^\*\s+(.*)$/);
  if (listItemMatch) {
    const [, content] = listItemMatch;
    return wrap(parseInline(content), 'li');
  }
  return null;
}

// Function to parse paragraphs
function parseParagraph(line) {
  return wrap(parseInline(line), 'p');
}

// Main parse function
export function parse(markdown) {
  const lines = markdown.split('\n');
  let html = '';
  let inList = false;

  lines.forEach((line) => {
    // Trim the line to handle leading/trailing whitespace
    const trimmedLine = line.trim();

    if (trimmedLine === '') {
      // Skip empty lines
      return;
    }

    // Attempt to parse as header
    const header = parseHeader(trimmedLine);
    if (header) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      html += header;
      return;
    }

    // Attempt to parse as list item
    const listItem = parseListItem(trimmedLine);
    if (listItem) {
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      html += listItem;
      return;
    }

    // Otherwise, parse as paragraph
    if (inList) {
      html += '</ul>';
      inList = false;
    }
    html += parseParagraph(trimmedLine);
  });

  // Close any open list at the end
  if (inList) {
    html += '</ul>';
  }

  return html;
}
