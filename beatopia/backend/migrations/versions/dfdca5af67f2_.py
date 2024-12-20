"""empty message

Revision ID: dfdca5af67f2
Revises: 975fdea7753d
Create Date: 2024-12-20 19:02:19.878916

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'dfdca5af67f2'
down_revision = '975fdea7753d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('mixes', schema=None) as batch_op:
        batch_op.drop_column('file_path')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('mixes', schema=None) as batch_op:
        batch_op.add_column(sa.Column('file_path', mysql.VARCHAR(length=255), nullable=False))

    # ### end Alembic commands ###