import { sum } from './math-functions';

/**
 * Unit тестирование - тестирование обособленного юнита
 * Это основной и самый частый вид тестирования, тут мы абстрагируемся от всего и проверяем только 1 функцию
 * Это самый быстрый вид тестирования, и в проекте их может быть очень много
 *
 * Хорошо бы, чтобы это были чистые функции, так тесты будет писать проще, а код будет проще поддерживать
 */

// describe - задаёт текстом пространство для тестирования. Этот текст, как заголовок
describe('#math-functions', () => {
  // it - сам тест. Первый аргумент - название теста, должен начинаться со слова should - это такая практика
  it('should works correctly with two positive arguments', () => {
    /** Тест всегда состоит из 3 частей: Arrange, Act, Assert.
     * По-хорошему, на 1 тест должен быть 1 assert, потому что
     * один тест должен проверять каку-то одну составляющую программы
     */

    // Arrange part - часть настроек, тут задаём начальные значения и подготавливаем окружение для запуска функции, которую тестируем
    const a = 10;
    const b = 20;

    // Act part - запускаем тестируемую функцию с нужными аргументами
    const result = sum(a, b);

    // Assert part - проверяем фактическое значение с эталонным
    expect(result).toBe(30);
  });

  it('should work correctly with two negative numbers', () => {
    // Arrange part
    const a = -10;
    const b = -20;

    // Act part
    const result = sum(a, b);

    // Assert part
    expect(result).toBe(-30);
  });

  it('should work correctly with negative and positive numbers', () => {
    // Arrange part
    const a = 10;
    const b = -20;

    // Act part
    const result = sum(a, b);

    // Assert part
    expect(result).toBe(-10);
  });
});
