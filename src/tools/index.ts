/**
 * 工具模板示例
 * 
 * AI Agent 可以根据需求创建新的工具文件
 * 格式：export const tool = { name, description, handler }
 */

export interface Tool {
  name: string;
  description: string;
  handler: (input: any) => Promise<any>;
}

// 示例工具：后续 AI 会自动添加更多工具
export const exampleTool: Tool = {
  name: "example",
  description: "这是一个示例工具，AI 会根据需求创建更多工具",
  handler: async (input) => {
    return {
      success: true,
      message: "工具系统运行中，等待 AI 自动扩展...",
      timestamp: new Date().toISOString(),
    };
  },
};

// 工具注册表
export const tools = [exampleTool];

// 获取所有工具
export function getAllTools() {
  return tools.map((t) => ({
    name: t.name,
    description: t.description,
  }));
}
