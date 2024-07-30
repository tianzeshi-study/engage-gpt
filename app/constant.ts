export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const DEFAULT_API_HOST = "https://api.nextchat.dev";
export const OPENAI_BASE_URL = "https://api.openai.com";
export const ANTHROPIC_BASE_URL = "https://api.anthropic.com";

export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";

export const BAIDU_BASE_URL = "https://aip.baidubce.com";
export const BAIDU_OATUH_URL = `${BAIDU_BASE_URL}/oauth/2.0/token`;

export const BYTEDANCE_BASE_URL = "https://ark.cn-beijing.volces.com";

export const ALIBABA_BASE_URL = "https://dashscope.aliyuncs.com/api/";

export const CACHE_URL_PREFIX = "/api/cache";
export const UPLOAD_URL = `${CACHE_URL_PREFIX}/upload`;

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum ApiPath {
  Cors = "",
  Azure = "/api/azure",
  OpenAI = "/api/openai",
  Anthropic = "/api/anthropic",
  Google = "/api/google",
  Baidu = "/api/baidu",
  ByteDance = "/api/bytedance",
  Alibaba = "/api/alibaba",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Azure = "Azure",
  Google = "Google",
  Anthropic = "Anthropic",
  Baidu = "Baidu",
  ByteDance = "ByteDance",
  Alibaba = "Alibaba",
}

// Google API safety settings, see https://ai.google.dev/gemini-api/docs/safety-settings
// BLOCK_NONE will not block any content, and BLOCK_ONLY_HIGH will block only high-risk content.
export enum GoogleSafetySettingsThreshold {
  BLOCK_NONE = "BLOCK_NONE",
  BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH",
  BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE",
  BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE",
}

export enum ModelProvider {
  GPT = "GPT",
  GeminiPro = "GeminiPro",
  Claude = "Claude",
  Ernie = "Ernie",
  Doubao = "Doubao",
  Qwen = "Qwen",
}

export const Anthropic = {
  ChatPath: "v1/messages",
  ChatPath1: "v1/complete",
  ExampleEndpoint: "https://api.anthropic.com",
  Vision: "2023-06-01",
};

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Azure = {
  ChatPath: (deployName: string, apiVersion: string) =>
    `deployments/${deployName}/chat/completions?api-version=${apiVersion}`,
  ExampleEndpoint: "https://{resource-url}/openai/deployments/{deploy-id}",
};

export const Google = {
  ExampleEndpoint: "https://generativelanguage.googleapis.com/",
  ChatPath: (modelName: string) =>
    `v1beta/models/${modelName}:streamGenerateContent`,
};

export const Baidu = {
  ExampleEndpoint: BAIDU_BASE_URL,
  ChatPath: (modelName: string) => {
    let endpoint = modelName;
    if (modelName === "ernie-4.0-8k") {
      endpoint = "completions_pro";
    }
    if (modelName === "ernie-4.0-8k-preview-0518") {
      endpoint = "completions_adv_pro";
    }
    if (modelName === "ernie-3.5-8k") {
      endpoint = "completions";
    }
    if (modelName === "ernie-speed-128k") {
      endpoint = "ernie-speed-128k";
    }
    if (modelName === "ernie-speed-8k") {
      endpoint = "ernie_speed";
    }
    return `rpc/2.0/ai_custom/v1/wenxinworkshop/chat/${endpoint}`;
  },
};

export const ByteDance = {
  ExampleEndpoint: "https://ark.cn-beijing.volces.com/api/",
  ChatPath: "api/v3/chat/completions",
};

export const Alibaba = {
  ExampleEndpoint: ALIBABA_BASE_URL,
  ChatPath: "v1/services/aigc/text-generation/generation",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
// export const DEFAULT_SYSTEM_TEMPLATE = `
// You are ChatGPT, a large language model trained by {{ServiceProvider}}.
// Knowledge cutoff: {{cutoff}}
// Current model: {{model}}
// Current time: {{time}}
// Latex inline: $x^2$
// Latex block: $$e=mc^2$$
// `;
export const DEFAULT_SYSTEM_TEMPLATE = `
目标：创建一个问答助手，专注于无障碍问答、提倡无障碍建设，并关爱残障人士，遵循中国无障碍建设法。确保提供清晰、负责任的用户体验，并重视残障人士的身心健康。
提示
1. 
无障碍问题解答：
• 提供关于信息无障碍的具体解决方案，包括如何设计可访问的内容和平台。
• 解释网站和应用程序的无障碍标准和最佳实践。
• 针对特定的无障碍技术（如屏幕阅读器、键盘导航等）提供实用的指导和建议。
2. 
法规遵循：
• 确保所有建议和解决方案符合中国无障碍建设法的要求。
• 解释如何在实际操作中遵守这些法规，并提供合规的案例和示例。
3. 
用户体验：
• 提供设计和优化无障碍网站和应用的建议，确保用户界面友好、易用。
• 解决可能影响用户体验的无障碍问题，并提供改进措施。
4. 
健康与心理支持：
• 提供保障残障人士身心健康的建议，包括如何设计以支持心理和情感健康的无障碍解决方案。
• 讨论如何通过无障碍设计减少残障人士的心理压力和提升他们的生活质量。
示例问题和答案,
1. 
如何确保我的网站符合无障碍标准？
示例答案：
要确保网站符合无障碍标准，你可以采取以下措施：
• 遵循无障碍标准：确保你的网站符合《网页内容无障碍指南》（WCAG）2.1标准。这些指南包括提供文本替代（alt text）用于图像、确保足够的对比度、设计易于键盘操作的界面等。
• 使用无障碍工具：使用工具如WAVE、Axe等进行网站的无障碍测试，识别并修复潜在的无障碍问题。
• 进行用户测试：邀请真实的无障碍用户（例如使用屏幕阅读器的用户）来测试你的网站，并根据他们的反馈进行调整。
• 保持更新：定期检查和更新网站内容，确保所有新添加的内容也符合无障碍标准。
2. 
对于听力障碍人士，我应该如何优化我的应用程序？
示例答案：
对于听力障碍人士，优化应用程序可以采取以下措施：
• 提供字幕和文字转录：确保所有音频和视频内容都有字幕或文字转录，帮助听力障碍人士获取信息。
• 使用视觉提示：通过视觉提示（如弹出消息、图标）替代音频提示，确保应用程序的关键信息对所有用户都可访问。
• 支持手语：如果可能，考虑提供手语翻译选项，以帮助听力障碍人士更好地理解应用程序中的内容。
• 测试和反馈：进行无障碍测试，特别是针对听力障碍用户，收集他们的反馈以进一步优化应用程序。
3. 
根据中国无障碍建设法，我的公共设施需要做哪些改进？
示例答案：
根据中国无障碍建设法，公共设施需要进行以下改进：
• 无障碍通道：确保所有公共设施有无障碍通道，包括无障碍入口、坡道、电梯等。
• 无障碍标识：设置清晰的无障碍标识，帮助残障人士找到无障碍设施的位置。
• 无障碍卫生间：提供符合无障碍标准的卫生间，包括足够的空间和辅助设施。
• 信息无障碍：提供无障碍信息，如盲文标识、声音提示等，确保信息对所有用户可访问。
4. 
在设计无障碍内容时，如何兼顾视觉和认知障碍人士的需求？
示例答案：
在设计无障碍内容时，兼顾视觉和认知障碍人士的需求可以通过以下方法实现：
• 视觉障碍：
• 使用高对比度的色彩组合，确保文本和背景之间有明显的对比。
• 提供文本替代（alt text）用于所有重要的图像。
• 使用大字号和易读的字体，以提高内容的可读性。
• 认知障碍：
• 简化语言和结构，避免使用复杂的术语和句子。
• 提供清晰的导航和指导，帮助用户理解和操作内容。
• 使用视觉提示和图标来辅助理解，提供额外的说明和示例。
5. 
如何在应用程序中实现屏幕阅读器的兼容性？
示例答案：
实现应用程序的屏幕阅读器兼容性可以采取以下步骤：
• 添加ARIA标签：使用ARIA（可访问富互联网应用）标签为屏幕阅读器提供结构化信息，帮助其理解页面元素的功能。
• 确保逻辑结构：确保应用程序的HTML和布局有逻辑结构，屏幕阅读器能够顺序读取内容。
• 提供键盘导航：确保应用程序可以通过键盘操作完成所有功能，屏幕阅读器用户通常依赖于键盘导航。
• 测试兼容性：使用不同的屏幕阅读器（如NVDA、JAWS、VoiceOver）测试应用程序，确保其功能正常并修复发现的问题。
 `;

export const SUMMARIZE_MODEL = "gpt-4o-mini";
export const GEMINI_SUMMARIZE_MODEL = "gemini-pro";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  "gpt-4-turbo": "2023-12",
  "gpt-4-turbo-2024-04-09": "2023-12",
  "gpt-4-turbo-preview": "2023-12",
  "gpt-4o": "2023-10",
  "gpt-4o-2024-05-13": "2023-10",
  "gpt-4o-mini": "2023-10",
  "gpt-4o-mini-2024-07-18": "2023-10",
  "gpt-4-vision-preview": "2023-04",
  // After improvements,
  // it's now easier to add "KnowledgeCutOffDate" instead of stupid hardcoding it, as was done previously.
  "gemini-pro": "2023-12",
  "gemini-pro-vision": "2023-12",
};

const openaiModels = [
  "gpt-3.5-turbo",
  "gpt-3.5-turbo-1106",
  "gpt-3.5-turbo-0125",
  "gpt-3.5-turbo-0613",
  "zyb-gpt",
  "gpt-4",
  "gpt-4-0613",
  "gpt-4-32k",
  "gpt-4-32k-0613",
  "gpt-4-turbo",
  "gpt-4-turbo-preview",
  "gpt-4o",
  "gpt-4o-2024-05-13",
  "gpt-4o-mini",
  "gpt-4o-mini-2024-07-18",
  "gpt-4-vision-preview",
  "gpt-4-turbo-2024-04-09",
  "gpt-4-1106-preview",
];

const googleModels = [
  "gemini-1.0-pro",
  "gemini-1.5-pro-latest",
  "gemini-1.5-flash-latest",
  "gemini-pro-vision",
];

const anthropicModels = [
  "claude-instant-1.2",
  "claude-2.0",
  "claude-2.1",
  "claude-3-sonnet-20240229",
  "claude-3-opus-20240229",
  "claude-3-haiku-20240307",
  "claude-3-5-sonnet-20240620",
];

const baiduModels = [
  "ernie-4.0-turbo-8k",
  "ernie-4.0-8k",
  "ernie-4.0-8k-preview",
  "ernie-4.0-8k-preview-0518",
  "ernie-4.0-8k-latest",
  "ernie-3.5-8k",
  "ernie-3.5-8k-0205",
  "ernie-speed-128k",
  "ernie-speed-8k",
  "ernie-lite-8k",
  "ernie-tiny-8k",
];

const bytedanceModels = [
  "Doubao-lite-4k",
  "Doubao-lite-32k",
  "Doubao-lite-128k",
  "Doubao-pro-4k",
  "Doubao-pro-32k",
  "Doubao-pro-128k",
];

const alibabaModes = [
  "qwen-turbo",
  "qwen-plus",
  "qwen-max",
  "qwen-max-0428",
  "qwen-max-0403",
  "qwen-max-0107",
  "qwen-max-longcontext",
];

export const DEFAULT_MODELS = [
  ...openaiModels.map((name) => ({
    name,
    available: true,
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
    },
  })),
  ...openaiModels.map((name) => ({
    name,
    available: true,
    provider: {
      id: "azure",
      providerName: "Azure",
      providerType: "azure",
    },
  })),
  ...googleModels.map((name) => ({
    name,
    available: true,
    provider: {
      id: "google",
      providerName: "Google",
      providerType: "google",
    },
  })),
  ...anthropicModels.map((name) => ({
    name,
    available: true,
    provider: {
      id: "anthropic",
      providerName: "Anthropic",
      providerType: "anthropic",
    },
  })),
  ...baiduModels.map((name) => ({
    name,
    available: true,
    provider: {
      id: "baidu",
      providerName: "Baidu",
      providerType: "baidu",
    },
  })),
  ...bytedanceModels.map((name) => ({
    name,
    available: true,
    provider: {
      id: "bytedance",
      providerName: "ByteDance",
      providerType: "bytedance",
    },
  })),
  ...alibabaModes.map((name) => ({
    name,
    available: true,
    provider: {
      id: "alibaba",
      providerName: "Alibaba",
      providerType: "alibaba",
    },
  })),
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;

// some famous webdav endpoints
export const internalAllowedWebDavEndpoints = [
  "https://dav.jianguoyun.com/dav/",
  "https://dav.dropdav.com/",
  "https://dav.box.com/dav",
  "https://nanao.teracloud.jp/dav/",
  "https://bora.teracloud.jp/dav/",
  "https://webdav.4shared.com/",
  "https://dav.idrivesync.com",
  "https://webdav.yandex.com",
  "https://app.koofr.net/dav/Koofr",
];
