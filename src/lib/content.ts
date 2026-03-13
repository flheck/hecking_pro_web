import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Reads a raw MDX file from /content/{locale}/{slug}.mdx
 */
export function getMdxContent(locale: string, slug: string): string {
  const filePath = path.join(contentDirectory, locale, `${slug}.mdx`);
  return fs.readFileSync(filePath, 'utf8');
}

/**
 * Parses a YAML file from /content/{locale}/{slug}.yml
 */
export function getYamlContent<T>(locale: string, slug: string): T {
  const filePath = path.join(contentDirectory, locale, `${slug}.yml`);
  const raw = fs.readFileSync(filePath, 'utf8');
  return yaml.load(raw) as T;
}
