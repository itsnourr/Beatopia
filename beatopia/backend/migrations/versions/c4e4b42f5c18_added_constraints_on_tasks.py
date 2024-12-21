"""added constraints on tasks

Revision ID: c4e4b42f5c18
Revises: 40711b9a2beb
Create Date: 2024-12-21 10:44:17.288613

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'c4e4b42f5c18'
down_revision = '40711b9a2beb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tasks', schema=None) as batch_op:
        batch_op.add_column(sa.Column('status', sa.String(length=100), nullable=True))
        batch_op.drop_column('is_completed')
        batch_op.drop_column('created_at')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tasks', schema=None) as batch_op:
        batch_op.add_column(sa.Column('created_at', mysql.DATETIME(), nullable=True))
        batch_op.add_column(sa.Column('is_completed', mysql.TINYINT(display_width=1), autoincrement=False, nullable=True))
        batch_op.drop_column('status')

    # ### end Alembic commands ###
