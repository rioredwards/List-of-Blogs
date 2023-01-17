import { render, screen } from '@testing-library/react';
import BlogCard from './BlogCard';

test('should render the blog card with title, subtitle, author and text', () => {
  const container = render(
    <BlogCard
      title="Test title"
      subtitle="Test subtitle"
      text="lorem ipsum blah blah blah"
      image="https://www.fillmurray.com/300/200"
    />
  );
  const title = screen.getByText('Test title');
  expect(title).toBeVisible();
});
